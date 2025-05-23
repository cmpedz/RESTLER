import { Search } from "lucide-react";
import TableProvider from "../components/tableProvider";
import { ToggleButton } from "../context/SidebarContext";
import { useGetProviders } from "../hooks/useProviderQueries";
import LoadingBar from "../components/LoadingBar";
const Provider = () => {
  const { data: providers, isLoading, error } = useGetProviders();
  return (
    <div className="h-full w-full flex items-center justify-center dark:bg-gray-950 p-6">
      <LoadingBar isLoading={isLoading} />

      <div className="w-full h-full bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="flex items-center justify-between gap-x-4">
            <ToggleButton />
            <div className="flex flex-col max-w-lg">
              <h2 className="text-2xl font-bold flex items-center text-gray-800 dark:text-white">
                <Search className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400" />
                Provider
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Provide support for protocols like SAML and OAuth to assigned
                applications.
              </p>
            </div>
          </div>
        </div>
        {isLoading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Loading providers...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
          </p>
        ) : providers && Array.isArray(providers) ? (
          <TableProvider providers={providers} />
        ) : (
          <p>No provider available</p>
        )}
      </div>
    </div>
  );
};

export default Provider;
