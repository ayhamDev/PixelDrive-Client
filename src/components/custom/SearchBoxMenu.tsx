import SearchBoxMenuItem from "./SearchBoxMenuItem";

const SearchBoxMenu = () => {
  return (
    <div className="pb-2">
      {/* <CardDescription className="pt-6">
        No Items Match Your Search
      </CardDescription> */}

      <p className="text-lg text-muted-foreground sticky top-0 w-full bg-background p-3 border-b px-5">
        Folder
      </p>
      <div className="px-5">
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
      </div>

      <p className="text-lg text-muted-foreground sticky top-0 w-full bg-background p-3 border-b px-5">
        Files
      </p>
      <div className="px-5">
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
        <SearchBoxMenuItem />
      </div>
    </div>
  );
};

export default SearchBoxMenu;
