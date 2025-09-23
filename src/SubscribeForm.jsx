export default function SubscribeForm() {
  return (
    <form
      action="https://solsevenstudio.us20.list-manage.com/subscribe/post?u=defbb93410f7ef85725de88b1&id=0520fdc9c0&f_id=00807deef0"
      method="post"
      target="_blank"
      noValidate
      className="flex flex-col sm:flex-row gap-3 justify-center"
    >
      <input
        type="email"
        name="EMAIL"
        required
        placeholder="you@email.com"
        className="w-full sm:w-auto flex-grow rounded-xl px-3 py-2 bg-white/10 border border-white/20 text-white"
      />
      <button
        type="submit"
        className="rounded-xl px-6 py-2 bg-amber-400 text-[#0e2a2f] font-semibold hover:bg-amber-300"
      >
        Subscribe
      </button>
    </form>
  );
}