import ReactMarkdown from "react-markdown";

const components: {} = {
  p: (p: { children: string }) => {
    return <p className="my-6 text-lg">{p.children}</p>;
  },
  h2: (h2: { children: string }) => {
    return <h2 className="text-3xl">{h2.children}</h2>;
  },
  h3: (h3: { children: string }) => {
    return <h3 className="text-2xl">{h3.children}</h3>;
  },
};

const PostBody: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown components={components} className="flex flex-col gap-y-4">
      {content}
    </ReactMarkdown>
  );
};
export default PostBody;
