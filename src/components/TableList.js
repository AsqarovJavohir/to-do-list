import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const TableList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h6 className="text-center">
        Not Found
      </h6>
    )
  }
    return (
        <>
      <h5 className="text-center">{title}</h5>
      <table className="table table-striped">
      <TableHeader/>
        <tbody>
        {posts.map((post, index) => (
          <TableItem remove={remove} number={index+1} post={post} key={post.id}/>
        ))}
        
       </tbody>
        
      </table>
        </>
    );
};

export default TableList;