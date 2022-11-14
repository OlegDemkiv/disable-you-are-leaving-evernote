const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('dest')) {
  window.location.href = searchParams.get('dest');
}
