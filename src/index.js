export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Auto Glass Booking is live 🚗", {
        headers: { "content-type": "text/plain" },
      });
    }

    if (url.pathname === "/quote/yazmin") {
      return new Response("Yazmin quote page coming soon", {
        headers: { "content-type": "text/plain" },
      });
    }

    return new Response("Page not found", { status: 404 });
  },
};
