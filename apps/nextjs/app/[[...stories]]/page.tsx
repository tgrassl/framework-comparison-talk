import Link from 'next/link';

import type { IStory } from '../../types';
import Story from '../../components/story';
import fetchAPI from '../../api';

const mapStories: Record<string, string> = {
  top: 'news',
  new: 'newest',
  show: 'show',
  ask: 'ask',
  job: 'jobs',
};

interface IndexPageProps {
  params: {
    stories: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Index({ params, searchParams }: IndexPageProps) {
  const page = +(searchParams.page || 1);
  const type = params.stories ? params.stories[0] : 'top';
  const stories: IStory[] = await fetchAPI(`${mapStories[type]}?page=${page}`);

  return (
    <div className="news-view">
      <div className="news-list-nav">
        {page > 1 ? (
          <Link
            className="page-link"
            href={`/${type}?page=${page - 1}`}
            aria-label="Previous Page"
          >
            {'<'} prev
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            {'<'} prev
          </span>
        )}
        <span>page {page}</span>
        {stories && stories.length >= 29 ? (
          <Link
            className="page-link"
            href={`/${type}?page=${page + 1}`}
            aria-label="Next Page"
          >
            more {'>'}
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            more {'>'}
          </span>
        )}
      </div>
      <main className="news-list">
        {stories && (
          <ul>
            {stories.map((story) => (
              <Story key={story.id} story={story} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
