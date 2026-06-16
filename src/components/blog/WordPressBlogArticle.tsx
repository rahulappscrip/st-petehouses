type WordPressBlogArticleProps = {
  html: string;
};

export function WordPressBlogArticle({ html }: WordPressBlogArticleProps) {
  return <div className="wp-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
