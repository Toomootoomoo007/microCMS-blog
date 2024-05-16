import Link from "next/link";
import { client } from "@/libs/client";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import styled from './page.module.css'

async function listBlog() {
  try {
    const response = await client.getList({
      endpoint: "blog",
    });

    return {
      data: response.contents ?? null,
      error: null,
    };
  } catch (error) {
    console.error("エラーが発生しました", error);
    return {
      data: null,
      error: error.message,
    };
  }
}

export default async function BlogList() {
  const { data, error } = await listBlog();

  if (error != null) return <div>エラーが発生しました。</div>;

  return (
    <>
      <main>
        <h2 className={styled.blogHeading}>Tomo's Blog</h2>
        {
          <ul className={styled.cardArea}>
            {data != null ? (
              data.map((blog) => {
                return (
                  <li className={styled.card} key={blog.id}>
                    <h3>{blog.title}</h3>
                    <Link href={`/blog/${blog.id}`}>この記事をもっと読む</Link>
                  </li>
                );
              })
            ) : (
              <li>データがありませんでした。</li>
            )}
          </ul>
        }
      </main>
      <Footer></Footer>
    </>
  );
}
