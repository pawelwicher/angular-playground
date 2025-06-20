import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Post = {
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-posts',
  imports: [
    FormsModule
  ],
  template: `
    <p>{{ title }}</p>

    <label for="postId">Post ID:</label>
    <input id="postId" type="number" [(ngModel)]="postId" min="1" placeholder="Leave empty for all posts" />

    @if (posts.isLoading()) {
      <p>Loading posts...</p>
    } @else if (error()) {
      <p>Error loading posts: {{ error() }}</p>
    } @else {
      @for (post of posts.value(); track post.id) {
        <article>
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
          <footer>
            <small>Post ID: {{ post.id }}</small>
          </footer>
        </article>
      }
    }
  `
})
export class Posts {

  protected title = 'Posts';

  protected posts = httpResource<Post[]>(
    () => `https://jsonplaceholder.typicode.com/posts${this.postId() ? `?id=${this.postId()}` : ''}`,
    {
      parse: (response) => {
        //console.log(response); 

        return response as Post[];
      },
    }
  );

  protected error = computed(() => {
    const error = this.posts.error() as Error;
    return error ? error.message : null;
  });

  protected postId = signal<number | null>(null);

}
