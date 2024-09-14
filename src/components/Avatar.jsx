import AvatarImg from "../assets/images/pfp.jpg";
export default function Avatar() {
  return (
    <div className="h-full w-full border border-gray-500/50 aspect-square overflow-hidden rounded-2xl">
      <img src={AvatarImg} className="w-full object-cover" />
    </div>
  );
}
