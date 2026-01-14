import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import { blogPosts } from "../constants";

const Safari = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="safari" />
        <div className="safari-toolbar">
          <div className="url-bar">
            <span className="url-icon">🔒</span>
            <span className="url-text">athina.dev/blog</span>
          </div>
        </div>
      </div>

      <div className="safari-content">
        <h2 className="safari-title">Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <img 
                src={post.image} 
                alt={post.title}
                className="blog-image"
              />
              <div className="blog-info">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;
