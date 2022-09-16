function pageLayout({ content }) {
  return `
  <h1>SYNCHRONOUS</h1>
  <p>--Content Start--</p>
  ${content}
  <footer>--Content End--</footer>
    `;
}

module.exports = pageLayout;
