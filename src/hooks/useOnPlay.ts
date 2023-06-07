import { Song } from "../types";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import { useUser } from "./useUser";

export default function useOnPlay(songs: Song[]) {
  const { setId, setIds } = usePlayer();
  const { onOpen } = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return onOpen();
    }
    setId(id);
    setIds(songs.map((song) => song.id));
  };

  return onPlay;
}
