import { ReactElement, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';

import { NextPageWithLayout } from '../_app';
import { InputField } from '@/components/ui/Input';
import { addComic, searchComics } from '@/api';
import { useDebounce } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import type TComicItem from '@/types/comic';
import ComicList from '@/components/comic/ComicList';
import AddComic from '@/components/comic/AddComic';
import { ComicDetail } from '@/components/comic/ComicDetail';
import { createImageUrl } from '@/utils';
import useBoundStore from '@/store';
import ExploreNav from '@/components/explore/ExploreNav';

const ComicSearch: NextPageWithLayout = () => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<TComicItem>();
  const [comicToView, setComicToView] = useState<TComicItem>();

  const setAlert = useBoundStore((store) => store.setAlert);

  const handleChange = (inputValue: string) => setValue(inputValue);
  const debouncedValue = useDebounce(value, 500);

  const { isLoading, data } = useQuery(
    ['search-marvel-comics', debouncedValue],
    () => searchComics(debouncedValue),
    { enabled: !!value.length, initialData: [] },
  );

  const { mutate: addNewComic } = useMutation({
    mutationFn: addComic,
    onSuccess: (response) => {
      setAlert({
        type: 'success',
        message: response,
      });
    },
    onError: (error: Error) => {
      setAlert({
        type: 'error',
        message: error.message,
      });
    },
  });

  return (
    <main className="pt-8 lg:pt-9 px-4 lg:px-7 pb-9 lg:pb-10">
      <ExploreNav />
      <div className="my-3 w-100">
        <InputField
          placeholder="Search for a comic book..."
          value={value}
          onChange={handleChange}
          Icon={<MagnifyingGlassIcon className="w-5 h-5 text-grey-800" />}
          fullWidth
        />
      </div>
      {comicToView && (
        <ComicDetail
          comic={comicToView}
          onClose={() => setComicToView(undefined)}
        />
      )}
      {selected && (
        <AddComic
          comic={selected}
          onAdd={() => {
            addNewComic({
              comicId: selected.id,
              title: selected.title,
              imageUrl: createImageUrl(selected.images),
              issueNumber: selected.issueNumber,
            });
            setSelected(undefined);
          }}
          onClose={() => setSelected(undefined)}
          show={!!selected}
        />
      )}
      <ComicList
        comics={data}
        isLoading={isLoading}
        onViewComic={(comic) => setComicToView(comic)}
        onAddComic={(comic) => setSelected(comic)}
      />
    </main>
  );
};

ComicSearch.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      seo={{
        title: 'Comic search',
        meta: {
          description: 'Search comics to add to your collection',
        },
      }}
    >
      {page}
    </AuthLayout>
  );
};

export default ComicSearch;
