import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

type Data = any;

export async function getMarkdownData(fileName: string): Promise<Data> {
  // read file
  const filePath = path.join(contentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // process with matter
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const contentHtml = await remark()
    .use(html)
    .process(content)
    .then((data) => data.toString());

  return { contentHtml, ...data };
}
