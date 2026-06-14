import React from 'react';

const Accessibility = () => {
  return (
    <div className="accessibility">
      <div className="container">
        <h1>Accessibility Statement</h1>
        <p>At Aimero Hospital, we are committed to ensuring digital accessibility for people with disabilities. We continue to improve the user experience for everyone and apply the relevant accessibility standards.</p>
        
        <div className="accessibility-section">
          <h2>Measures to Support Accessibility</h2>
          <p>We take the following measures to ensure accessibility:</p>
          <ul>
            <li>Include accessibility as part of our digital strategy</li>
            <li>Integrate accessibility into our procurement practices</li>
            <li>Provide continual accessibility training for our staff</li>
            <li>Assign clear accessibility goals and responsibilities</li>
            <li>Employ formal accessibility quality assurance methods</li>
          </ul>
        </div>
        
        <div className="accessibility-section">
          <h2>Conformance Status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We are partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>
        </div>
        
        <div className="accessibility-section">
          <h2>Technical Specifications</h2>
          <p>Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web accessibility support in browsers</li>
          </ul>
          <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
        </div>
        
        <div className="accessibility-section">
          <h2>Feedback</h2>
          <p>We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:</p>
          <ul>
            <li>Email: accessibility@aimerohospital.com</li>
            <li>Phone: +251 911 123 456</li>
            <li>Office: Patient Relations Department, Ground Floor</li>
          </ul>
          <p>We try to respond to feedback within 5 business days.</p>
        </div>
        
        <div className="accessibility-section">
          <h2>Compatibility with Browsers and Assistive Technology</h2>
          <p>This website is designed to be compatible with:</p>
          <ul>
            <li>Chrome, Firefox, Safari, Edge (latest versions)</li>
            <li>Screen readers: JAWS, NVDA, VoiceOver, TalkBack</li>
            <li>Speech recognition software</li>
            <li>Alternative input devices</li>
          </ul>
        </div>
        
        <div className="accessibility-section">
          <h2>Website Accessibility Features</h2>
          
          <div className="feature">
            <h3>Keyboard Navigation</h3>
            <p>Our website can be navigated entirely using keyboard commands. Tab, Shift+Tab, Enter, and Space keys provide full functionality.</p>
          </div>
          
          <div className="feature">
            <h3>Screen Reader Compatibility</h3>
            <p>We use semantic HTML, ARIA labels, and descriptive alt text to ensure compatibility with screen readers.</p>
          </div>
          
          <div className="feature">
            <h3>Adjustable Text Size</h3>
            <p>Users can adjust text size using browser controls (Ctrl + Plus/Minus) or mobile pinch gestures.</p>
          </div>
          
          <div className="feature">
            <h3>Color Contrast</h3>
            <p>We maintain appropriate color contrast ratios (at least 4.5:1 for normal text, 3:1 for large text) to ensure readability.</p>
          </div>
          
          <div className="feature">
            <h3>Focus Indicators</h3>
            <p>Visible focus indicators help users track their location on the page when navigating with keyboard.</p>
          </div>
        </div>
        
        <div className="accessibility-section">
          <h2>Accommodations at Our Facility</h2>
          <p>We provide the following accommodations at our physical location:</p>
          
          <div className="accommodation">
            <h3>Physical Access</h3>
            <ul>
              <li>Ramps and automatic doors</li>
              <li>Wide corridors and doorways (minimum 32 inches)</li>
              <li>Accessible parking spaces close to entrances</li>
              <li>Wheelchair-accessible restrooms</li>
              <li>Adjustable-height exam tables</li>
              <li>Accessible drinking fountains</li>
            </ul>
          </div>
          
          <div className="accommodation">
            <h3>Communication Access</h3>
            <ul>
              <li>Sign language interpreters available upon request</li>
              <li>Materials in alternate formats (large print, braille)</li>
              <li>Visual alerts for hearing-impaired patients</li>
              <li>Assistive listening devices</li>
              <li>TDD/TTY services</li>
            </ul>
          </div>
          
          <div className="accommodation">
            <h3>Mobility Access</h3>
            <ul>
              <li>Wheelchairs available throughout the facility</li>
              <li>Wheelchair lifts and ramps</li>
              <li>Accessible parking with appropriate signage</li>
              <li>Clear pathways marked and maintained</li>
            </ul>
          </div>
        </div>
        
        <div className="accessibility-section">
          <h2>How to Request Accommodations</h2>
          <p>To request accommodations for a disability:</p>
          <ol>
            <li>Contact our Patient Relations Department at +251 911 123 456</li>
            <li>Provide at least 48 hours advance notice when possible</li>
            <li>Specify the type of accommodation needed</li>
            <li>Our team will coordinate the necessary arrangements</li>
          </ol>
        </div>
        
        <div className="accessibility-section">
          <h2>Training and Staff Awareness</h2>
          <p>Our staff receives regular training on:</p>
          <ul>
            <li>Assisting patients with disabilities</li>
            <li>Using assistive devices</li>
            <li>Effective communication techniques</li>
            <li>Understanding various types of disabilities</li>
            <li>Legal requirements for accessibility</li>
          </ul>
        </div>
        
        <div className="accessibility-section">
          <h2>Limitations and Alternatives</h2>
          <p>Despite our best efforts to ensure accessibility of this website, there may be some limitations. Below is a description of known limitations, and potential solutions:</p>
          <ul>
            <li>Some older PDF documents may not be fully accessible - contact us for alternative formats</li>
            <li>Third-party embedded content may have accessibility limitations - we monitor and address these when identified</li>
            <li>Complex images may lack detailed descriptions - please contact us if clarification is needed</li>
          </ul>
        </div>
        
        <div className="accessibility-section">
          <h2>Assessment Approach</h2>
          <p>We assessed the accessibility of this website by:</p>
          <ul>
            <li>Using automated evaluation tools</li>
            <li>Manual testing with assistive technologies</li>
            <li>Engaging users with disabilities in testing</li>
            <li>Reviewing user feedback and complaints</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;