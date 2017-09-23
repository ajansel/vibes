import {getPost, getPosts, postPost} from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPost = (id) => (dispatch) => (
  getPost(id).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  )
);

export const fetchPosts = () => (dispatch) => (
  getPosts().then(
    (posts) => dispatch(receivePosts(posts)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  )
);

export const createPost = (formPost) => (dispatch) => (
  postPost(formPost).then(
    (post) => dispatch(receivePost(post)),
    (err) => dispatch(receivePostErrors(err.responseJSON))
  )
);