function Code(sel,text,encoded,decodeans){
    this.text = text;
    this.encode = encoded;
    this.temdec = encoded;
    this.decode = decodeans;
    this.array = ["", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", ""];
    this.count = 0;
    var orihtml = ' <tr>' +
        '        <td>A:A <input type="checkbox" id ="A" name="A"></td>' +
        '        <td>F:F <input type="checkbox" id ="F" name="F"></td>' +
        '        <td>K:K <input type="checkbox" id ="K" name="K"></td>' +
        '        <td>P:P <input type="checkbox" id ="P" name="P"></td>' +
        '        <td>U:U <input type="checkbox" id ="U" name="U"></td>' +
        '        <td>Z:Z <input type="checkbox" id ="Z" name="Z"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>B:B <input type="checkbox" id="B" name="B"></td>' +
        '        <td>G:G <input type="checkbox" id="G" name="G"></td>' +
        '        <td>L:L <input type="checkbox" id="L" name="L"></td>' +
        '        <td>Q:Q <input type="checkbox" id="Q" name="Q"></td>' +
        '        <td>V:V <input type="checkbox" id="V" name="V"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>C:C <input type="checkbox" id="C" name="C"></td>' +
        '        <td>H:H <input type="checkbox" id="H" name="H"></td>' +
        '        <td>M:M <input type="checkbox" id="M" name="M"></td>' +
        '        <td>R:R <input type="checkbox" id="R" name="R"></td>' +
        '        <td>W:W <input type="checkbox" id="W" name="W"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>D:D <input type="checkbox" id="D" name="D"></td>' +
        '        <td>I:I <input type="checkbox" id="I" name="I"></td>' +
        '        <td>N:N <input type="checkbox" id="N" name="N"></td>' +
        '        <td>S:S <input type="checkbox" id="S" name="S"></td>' +
        '        <td>X:X <input type="checkbox" id="X" name="X"></td>' +
        '      </tr>' +
        '      <tr>' +
        '        <td>E:E <input type="checkbox" id="E" name="E"></td>' +
        '        <td>J:J <input type="checkbox" id="J" name="J"></td>' +
        '        <td>O:O <input type="checkbox" id="O" name="O"></td>' +
        '        <td>T:T <input type="checkbox" id="T" name="T"></td>' +
        '        <td>Y:Y <input type="checkbox" id="Y" name="Y"></td>' +
        '      </tr>';

    document.getElementById('encode').innerHTML = encoded;
    document.getElementById('decode').innerHTML = this.temdec;
    document.getElementById('game').innerHTML = orihtml;
    document.getElementById('solution').innerHTML =text;
    $('input#giveup').show();
    $('input#swap').show();
    $('table#game').show();

    console.log(decodeans);

    document.getElementById('giveup').onclick=function(event){
        event.preventDefault();
        $('table#game').hide();
        $('p#end').html("You gave up!");
        $('input#giveup').hide();
        $('input#swap').hide();
        $('input#exit').hide();
        document.getElementById('decode').innerHTML = text;
    };
for(var i=0; i<26;i++){
        this.clicked(i);

    }
    var that = this;

    $('input#swap').click(function(event) {
        console.log(that.count);
        if(that.count <2){
            document.getElementById('err').innerHTML="Must select at least two letters!";
        }
        else {
            $('p#err').hide();
            //
            //console.log(that.cc);
            var orig = -1;
            var j = -1;
            var prv = "";
            for (var i = 0; i < 26; i++) {
                if (that.array[i] != "") {
                    if (orig == -1) {
                        orig = i;
                        j = i;
                        prv = that.array[i];
                    }
                    else {
                        var tmp = that.array[i];
                        that.array[i] = prv;
                        prv = tmp;
                        j = i;
                    }

                }
            }
            that.array[orig] = prv;
            j = -1;
            orig = -1;

            console.log(that.array);
            for (var i = 0; i < 26; i++) {
                if (that.array[i] != "") {
                    var chr = String.fromCharCode(65 + i);
                    var ans = that.array[i];
                    var str = 'input#';
                    str += chr;
                    var ref = $(str).parent();
                    var mod = ref.html().substr(0, 2) + ans + ref.html().substr(2 + 1);
                    ref.html(mod);
                }
                else{
                    var chr = String.fromCharCode(65 + i);
                    var ss = 'input#';
                    ss += chr;
                    var r = $(ss).parent().html();
                    var s = r.charAt(2);
                    that.array[i] = s;
                }
            }
            console.log(that.array);
            var res = "";
            for (var i = 0; i < that.temdec.length; i++) {
              //  var char = that.temdec.charAt(i);
                var char = that.encode.charAt(i);



                char = char.charCodeAt(0) - 65;
                if (char < 0) {

                    res += that.temdec.charAt(i);
                    continue;
                }
                res +=that.array[char];





            }
            that.temdec = res;
            console.log(res);
            document.getElementById('decode').innerHTML = that.temdec;


            if (that.temdec == that.text) {
                $('p#end').html("You decoded the secret message!");
                $('input#giveup').hide();
                $('input#swap').hide();
                $('input#exit').hide();
            }

            that.array = ["", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", ""];
            that.count = 0;
            for (var i = 0; i < 26; i++) {
                that.clicked(i);

            }

        }



    });




}
Code.prototype.clicked= function(i){
    var that=this;
    var chr = String.fromCharCode(65 + i);
    console.log(document.getElementById(chr).checked);
    document.getElementById(chr).onclick=function(event) {


        if (document.getElementById(chr).checked == true) {
            var str = 'input#';
            str += chr;
            var ref = $(str).parent().html();
            var sub = ref.substring(2, 3);
            that.array[i] = sub;
            that.count +=1;
            console.log(that.array);


        }
        else{
            that.array[i] = '';
            that.count -=1;
            console.log(that.array);


        }
    }
};
