import { Component, OnDestroy, OnInit } from '@angular/core';
import jsqr from 'jsqr';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-qrcode-reader-modal',
    templateUrl: './reader-modal.component.html',
    styleUrls: ['./reader-modal.component.scss']
})
export class QRCodeReaderModalComponent implements OnInit, OnDestroy {
    public stream?: MediaStream;
    public video: HTMLVideoElement;
    public scanLoop: any;
    public readerResult?: string;

    constructor(
        public modal: BsModalRef
    ) { }

    public async ngOnInit() {
        this.video = <HTMLVideoElement>document.getElementById('video');
        this.video.width = 300;
        const constraints: MediaStreamConstraints = {
            audio: false,
            video: {
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 776, ideal: 720, max: 1080 },
                frameRate: { ideal: 5, max: 15 },
                facingMode: { exact: 'environment' }
            }
        };
        this.start(constraints);
    }

    public ngOnDestroy() {
        this.stop();
    }

    /**
     * カメラ起動
     */
    public async start(constraints?: MediaStreamConstraints) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.stream = stream;
            this.video.srcObject = this.stream;
            const scanLoopTime = 500;
            this.scanLoop = setInterval(() => {
                if (this.scan()) {
                    this.modal.hide();
                }
            }, scanLoopTime);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * カメラ停止
     */
    public stop() {
        clearInterval(this.scanLoop);
        if (this.stream === undefined) {
            return;
        }
        this.stream.getVideoTracks().forEach((track) => {
            track.stop();
        });
        this.stream = undefined;
    }

    /**
     * カメラ読み取り
     */
    public scan() {
        // キャンバスへ反映
        const canvas = document.createElement('canvas');
        const context = <CanvasRenderingContext2D>canvas.getContext('2d');
        const width = this.video.offsetWidth;
        const height = this.video.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(this.video, 0, 0, width, height);
        // QRコードデコード
        const imageData = context.getImageData(0, 0, width, height);
        const qrcode = jsqr(imageData.data, width, height);
        if (qrcode !== null) {
            this.readerResult = qrcode.data;
        }
        return (qrcode !== null);
    }

}
