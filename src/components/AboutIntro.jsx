export default function AboutIntro() {
  return (
    <div className="card h-full w-full flex gap-6 p-10 flex-col bg-[#171717] px-4 border border-gray-500/50 rounded-3xl">
      <h1 className="text-4xl">What I'm about?</h1>
      <hr className="border border-gray-500/20" />
      <div>
        <p className="text-xs opacity-70">ABOUT</p>
        <p>
          I was born and raised in Cairo, Egypt. Ever since I was a child, I
          have had a passion for art and design. I was captivated by the vibrant
          colors and intricate details of the things around me, which inspired
          me to learn web design, where I delved deeper into the world of UX and
          product design.
        </p>
      </div>
      <div>
        <p className="text-xs opacity-70">WHAT DO I DO NOW</p>
        <p>
          Today I'm a Design Lead at mano improving the daily process of
          ordering groceries.
        </p>
      </div>
    </div>
  );
}
