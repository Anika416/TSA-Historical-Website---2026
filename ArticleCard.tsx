import { ReactNode } from "react";

interface ArticleCardProps {
  title: string;
  image?: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
}

export function ArticleCard({
  title,
  image,
  imagePosition = "left",
  children,
}: ArticleCardProps) {
  return (
    <div className="article-card">
      <h3 className="article-title">{title}</h3>
      <div
        className={`grid gap-6 ${
          image ? "md:grid-cols-2" : "grid-cols-1"
        } items-start`}
      >
        {image && imagePosition === "left" && (
          <div className="article-image-container">
            <img
              src={image}
              alt={title}
              className="article-image"
            />
          </div>
        )}
        <div className="article-content">{children}</div>
        {image && imagePosition === "right" && (
          <div className="article-image-container">
            <img
              src={image}
              alt={title}
              className="article-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
