import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:'blog part',
  },
  description: 'This is a page for showcasing a product.',
  // author: 'Patryk Buczkowski',
};

export default function MainBlog() {
    return <h1>MainBlog</h1>;
  }