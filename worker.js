
export default {
  async fetch(request, env) {
    return new Response("Smart Plant Dashboard is ready!", {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
