Page({
  videolist :[
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母b.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母p.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母m.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母f.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母d.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母t.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母n.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母l.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母g.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母k.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母h.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母j.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母q.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母x.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母zh.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母ch.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母sh.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母r.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母z.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母c.mp4",
      "cloud://yuepinhanyu-8gtjtlw230fadf9d.7975-yuepinhanyu-8gtjtlw230fadf9d-1319777079/video/声母s.mp4"],
  VideoNameList:["b","p","m","f","d","t","n","l","g","k","h","j","q","x",
                "zh","ch","sh","r","z","c","s"],
  data: {
    currentVideo: '',
    currentVideoname: '',
    videoContext:null,
    currentVideoIndex: 1,
    totalVideos: 21,
  },


  onReady() {
    this.data.videoContext = wx.createVideoContext('myVideo');
    this.playVideo(this.data.currentVideoIndex); // Play the first video when the page loads
    this.data.videoContext.play();
  },

  playVideo: function (videoNumber) {
    const videoPath = this.videolist[videoNumber-1];
    this.setData({ currentVideo: videoPath });
    const videoName = this.VideoNameList[videoNumber-1];
    this.setData({ currentVideoname: videoName });
  },

  prevVideo: function () {
    let newIndex = this.data.currentVideoIndex - 1;
    if (newIndex < 1) {
      newIndex = this.data.totalVideos;
    }
    this.setData({ currentVideoIndex: newIndex });
    this.playVideo(newIndex);
  },

  togglePlay: function () {

    this.data.videoContext.play();
  },

  nextVideo: function () {
    let newIndex = this.data.currentVideoIndex + 1;
    if (newIndex > this.data.totalVideos) {
      newIndex = 1;
    }
    this.setData({ currentVideoIndex: newIndex });
    this.playVideo(newIndex);
  }
});
