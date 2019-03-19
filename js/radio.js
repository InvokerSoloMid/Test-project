class Radio {

	constructor(){
		this.player = new Audio();
		this.playlist = [{name: 'Box UK', slug: 'boxuk', src: 'http://212.83.150.15:8189/stream?type=http&nocache=112476'},
						{name: 'Dance UK', slug: 'danceuk', src: 'http://212.83.150.15:8022//stream?type=http&nocache=112476'},
						{name: 'Classic Rock HD', slug: 'classicrockflorida', src: 'http://198.58.98.83:8258/stream'},
						{name: 'She Radio', slug: 'sheradio', src: 'http://airspectrum.cdnstream1.com:8136/1139_128'},
						{name: 'R&R Radio', slug: 'rockandrollchannel', src: 'http://uk2.internet-radio.com:8054/stream'}
						];
		this.current=0;
		this.player.src = this.playlist[this.current].src;
		this.player.preload = 'auto';
		this.player.crossOrigin = 'anonymous';
		this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		this.source = this.audioContext.createBufferSource();
		this.gainNode=this.audioContext.createGain();
		this.gainNode.gain.value=0;
	}
	
	togglePlay(){
		if( this.player.paused ){
			this.audioContext.resume();
			this.player.play();
		}else{
			this.player.pause();
		}
	}
	
	update(){
		this.bufferLength = this.analyser.frequencyBinCount;
		this.data = new Uint8Array(this.bufferLength);
		this.analyser.getByteTimeDomainData(this.data);
	}

	n(){
		this.current++;
		if(this.current>4) this.current=0;
		this.player.src=this.playlist[this.current].src;
		this.gainNode.gain.setValueAtTime(0, this.player.currentTime);
		this.player.play();
	}

	pr(){
		this.current--;
		if(this.current<0) this.current=4;
		this.player.src=this.playlist[this.current].src;
		this.player.play();	
	}

	info(){
		var a=this.playlist[this.current].name.toString();
		return a;
	}

	getName(e)
	{
		return this.playlist[e].name.toString();
	}

	setStation(num){
		this.current=num;
		this.player.src=this.playlist[this.current].src;
		this.player.play();	
	}

}

