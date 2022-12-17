export interface Comment {
	user: string;
	time_ago: string;
	content: string;
	comments: Comment[];
	id: string;
}

export interface User {
	id: string;
	created: string;
	karma: string;
	about: string;
}

export interface Story {
	points: string;
	url: string;
	title: string;
	domain: string;
	id: string;
	type: 'link' | 'job';
	user: string;
	time_ago: string;
	comments_count: number;
	comments: Comment[];
}

export type StoryType = 'job' | 'top' | 'new' | 'show' | 'ask';
