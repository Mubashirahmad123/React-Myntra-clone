import { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
 const postList = useLoaderData();
  

  // const handleGetPostsClick = () => {};

  // console.log("Button clicvked");

  return (
    <>
      
      {postList.length === 0 && (
        <WelcomeMessage/>
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};


export const postLoader = () =>{
   return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts;
      });
}




export default PostList;
