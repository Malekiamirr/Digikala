const copyURL = () => {
  // Get the current URL
  const currentURL = window.location.href;

  // Copy the URL to the clipboard
  navigator.clipboard.writeText(currentURL);
};

export default copyURL;
