// import './Feed.scss';

// const Feed = ({
//   id,
//   profileId,
//   profileImg,
//   articleImg,
//   desc,
//   likedProfileId,
//   totalLikes,
// }) => {
//   return (
//     <div className="feed" key={id}>
//       <div className="profileWrapper">
//         <div className="profileLeft">
//           <img className="profileImg" alt="Myprofile Img" src={profileImg} />
//           <span className="fontBold">{profileId}</span>
//         </div>
//         <img
//           className="menuImg"
//           alt="Menu Img"
//           src="images/eunjungSung/menu.png"
//         />
//       </div>
//       <img className="articleImg" alt="Feed Img" src={articleImg} />

//       <div className="functionWrapper">
//         <div className="functionRight">
//           <img alt="Heart Img" src="images/eunjungSung/emptyheart.png" />
//           <img alt="Comment Img" src="images/eunjungSung/comment.png" />
//           <img alt="Upload Img" src="images/eunjungSung/upload.png" />
//         </div>
//         <img alt="Bookmark Img" src="images/eunjungSung/bookmark.png" />
//       </div>

//       <div className="likeWrapper">
//         {`${totalLikes}` > 0 ? (
//           <>
//             <img
//               className="likeImg"
//               alt="Profile Img"
//               src="images/eunjungSung/userprofile1.png"
//             />
//             <span>
//               <span className="fontBold">{likedProfileId}</span>
//               님&nbsp;
//               <span className="fontBold">외 {totalLikes}명</span>이 좋아합니다
//             </span>
//           </>
//         ) : null}
//       </div>

//       <div className="descWrapper">
//         <span className="fontBold">{profileId}</span>
//         <span>{desc}</span>
//       </div>
//     </div>
//   );
// };

// export { Feed };
