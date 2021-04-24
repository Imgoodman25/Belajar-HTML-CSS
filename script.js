$(document).ready(() => {
    //kategori urutan di atas
    $('.sub-option').click((e) => {
        // console.log(e.target.innerHTML);
        let pilih = e.target.innerHTML;
        $('.select div').text(pilih);
    })
    //kategori di sidebar
    $('.pilihan div').click((e) => {
        let klik = $('.pilihan div');
        //kembali seperti semula
        klik.removeClass();
        $('.nama-grup .klik-grup').removeClass();
        //tambahkan klik pada class div
        e.target.classList.add('klik');
    });
    $('.nama-grup div').click((e) => {
        let klik_grup = $('.nama-grup div');
        //kembali seperti semula
        klik_grup.removeClass();
        $('.pilihan .klik').removeClass();
        //tambahkan klik pada class div
        e.target.classList.add('klik-grup');
    });
    $('.tools ul li span').click((e) => {
        const id = e.target.id;
        // refresh dulu
        $(".tools ul li:nth-child(1) span").attr('id', 'home');
        $(".tools ul li:nth-child(2) span").attr('id', 'notif');
        $(".tools ul li:nth-child(3) span").attr('id', 'akun');
        //eksekusi kodenya
        $(`#${id}`).attr("id", "active");
    });
    $('#akun').click((e) => {
        const link = $('.list-akun');
        console.log(link[0]);
        try {
            if (link[0].className == 'list-akun') {
                $('.list-akun').attr('class', 'list-akun-active')
            }
        } catch (err) {
                $('.list-akun-active').attr('class', 'list-akun')
        }

    })
});