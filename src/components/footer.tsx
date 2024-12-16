// import * as React from 'react';

// export interface IAppProps {
// }

export function Footer () {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <span><i>Tahutech.</i></span>
        </div>
        <div className="footer-feature">
          <div className="footer-feature-1">
              <div className="footer-feature-1-title">
                 <span>Feature</span>
              </div>
              <div className="footer-feature-1-list">
                  <span>Home</span>
                  <span>Articles</span>
                  <span>Categories</span>
                  <span>About</span>
              </div>
          </div>
          <div className="footer-feature-1">
              <div className="footer-feature-1-title">
                 <span>Category</span>
              </div>
              <div className="footer-feature-1-list">
                  <span>Social Media</span>
                  <span>ERP</span>
                  <span>Digital Literation</span>
                  <span>Machine Learning</span>
              </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span><i><b>Tahutech.</b></i> &copy; 2024 by Herry Liukae</span>
      </div>
    </div>
  );
}
