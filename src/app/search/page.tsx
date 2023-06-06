import { getSongsByTitle } from "../../actions/getSongsByTitle";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import SearchContent from "./components/SearchContent";

type Props = {
  searchParams: {
    title: string;
  };
};

export default async function Search({ searchParams: { title } }: Props) {
  const songs = await getSongsByTitle(title);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold text-white">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}
