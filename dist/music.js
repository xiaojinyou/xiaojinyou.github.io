const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,   //自动播放
    listFolded:false, //列表默认折叠
    theme: '#FADFA3', //主题色
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 2,
    audio: [
      {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/hikarunara.lrc'
    }
    ]
});
