import { Song } from "../types";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import useSubscribeModal from "./useSubscribeModal";
import { useUser } from "./useUser";

export default function useOnPlay(songs: Song[]) {
  const { setId, setIds } = usePlayer();
  const { onOpen: onOpenAuth } = useAuthModal();
  const { onOpen: onOpenSubscribe } = useSubscribeModal();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return onOpenAuth();
    }
    if (!subscription) {
      return onOpenSubscribe();
    }
    setId(id);
    setIds(songs.map((song) => song.id));
  };

  return onPlay;
}
