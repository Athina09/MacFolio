import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import { blogPosts } from "../constants";

const Safari = () => {
  return (
    <div className="safari-window">
      <div className="window-header safari-header">
        <WindowControls target="safari" />
        <div className="safari-nav">
          <button className="nav-btn" aria-label="Go back">‹</button>
          <button className="nav-btn" aria-label="Go forward">›</button>
        </div>
        <div className="safari-search">
          <input
            type="text"
            placeholder="Search or enter website name"
            readOnly
          />
        </div>
      </div>

      <div className="safari-content">
        <h2 className="blog-heading">My Developer Blog</h2>

        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-item">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-thumbnail"
                />
              )}
              <div className="blog-details">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <a
                  href={post.link}
                  className="blog-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out the full post <span className="arrow">⟶</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
