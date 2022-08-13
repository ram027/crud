import { useId } from 'react';

const CreateBlog = () => {
  const id = useId();
  return (
    <form>
      <div class="mb-3 mt-3">
        <label for={`${id}-title`} class="form-label">
          Blog title:
        </label>
        <input
          type="text"
          class="form-control"
          id={`${id}-title`}
          placeholder="Enter blog title"
          name="blog-title"
        />
      </div>
      <div class="mb-3">
        <label for={`${id}-author`} class="form-label">
          Blot author:
        </label>
        <input
          type="text"
          class="form-control"
          id={`${id}-author`}
          placeholder="Enter blog author name"
          name="blog-author"
        />
      </div>
      <div class="mb-3">
        <label for={`${id}-body`}>Blog body:</label>
        <textarea
          class="form-control"
          rows="5"
          id={`${id}-body`}
          name="text"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Add blog
      </button>
    </form>
  );
};
export default CreateBlog;
