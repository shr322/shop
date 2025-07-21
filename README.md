<div class="main_unit_content unit_class stop_notes"><p><a href="https://codingapple.com/course/react-basic/" target="_blank" rel="noopener noreferrer">(리액트 강좌 전체 메뉴)</a></p>
<p>&nbsp;</p>
<p>딱히 설명할 부분이 없어서 글로 진행합니다.</p>
<p>&nbsp;</p>
<p>지금까지 JSX 이용해서 html을 작성하고 있는데</p>
<p>if문을 써서 조건부로 html을 보여주고 싶을 때가 매우 많습니다.</p>
<p>지금까지는 삼항연산자만 주구장창 사용했는데 또 어떤 if문들을 쓸 수 있는지 맛만 보고 지나갑시다.</p>
<p>그냥 코딩 스타일적인 부분이기 때문에 그냥 이런게 있다고 알아두기만 해도 될듯요&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-size: 18pt;"><strong>1. 컴포넌트 안에서 쓰는 if/else</strong></span></p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">if</span> ( <span class="hljs-literal">true</span> ) {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
  }
} </code></pre>
<p>컴포넌트에서 JSX를 조건부로 보여주고 싶으면 그냥 이렇게 씁니다.</p>
<p>우리가 자주 쓰던 자바스크립트 if문은</p>
<p>return () 안의 JSX 내에서는 사용 불가능합니다.</p>
<p><strong>&lt;div&gt; if (어쩌구) {저쩌구} &lt;/div&gt;</strong> 이게 안된다는 소리입니다.</p>
<p>그래서 보통 return + JSX 전체를 퉤 뱉는 if문을 작성해서 사용합니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>(참고) 근데 이렇게 쓰시려면 else 생략이 가능합니다</strong></p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">if</span> ( <span class="hljs-literal">true</span> ) {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>;
  } 
  <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
} </code></pre>
<p>else와 중괄호를 하나 없애도 아까 코드와 똑같은 기능을 합니다.</p>
<p>왜냐면 자바스크립트 function 안에선 return 이라는 키워드를 만나면 return 밑에 있는 코드는 더이상 실행되지 않으니까요.</p>
<p>그래서 else가 필요없는 경우도 많으니 깔끔한 코드를 위해 한번 생략해보십시오.</p>
<p>if -&gt; else if -&gt; else 이렇게 구성된 조건문도 if 두개로 축약가능합니다. 한번 생각해보시면 됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-size: 18pt;"><strong>2. JSX안에서 쓰는 삼항연산자&nbsp;</strong></span></p>
<p>&nbsp;</p>
<p>영어로 간지나게 ternary operator 라고 합니다.&nbsp;</p>
<p><strong>조건문 <span style="color: #ff0000;">?</span> 조건문 참일때 실행할 코드 <span style="color: #ff0000;">:</span> 거짓일 때 실행할 코드</strong></p>
<p>이 형식에 맞춰 쓰면 끝입니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {
        </span><span style="background-color: #333399; color: #ffffff;"><span class="xml">1 === 1
</span></span><span class="xml">        </span><span style="background-color: #333399; color: #ffffff;"><span class="xml">? <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</span></span><span class="xml">        </span><span style="background-color: #333399; color: #ffffff;"><span class="xml">: null</span></span><span class="xml">
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
} </code></pre>
<p>그냥 JSX 내에서 if/else 대신 쓸 수 있다는게 장점이고 이전 강의들에서 자주 해본 것이니 설명은 스킵하도록 하겠습니다.</p>
<p>삼항연산자는 그냥 if와는 다르게 JSX 안에서도 실행가능하며 조건을 간단히 주고 싶을 때 사용합니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>삼항연산자는 중첩 사용도 됩니다.&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {
        1 === 1
        ? <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        : ( 2 === 2 
            ? <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>안녕<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> 
            : <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>반갑<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> 
          )
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
} </code></pre>
<p>else 문 안에 if/else 문을 하나 추가한 건데 제가 써놓고도 뭔소린지 모르겠군요</p>
<p>이렇게 나중에 읽었을 때 + 남이 읽었을 때 보기싫은 코드는 좋지 않습니다.</p>
<p>그냥 return문 바깥에서 if else 쓰신 다음 그 결과를 변수로 저장해놓고 변수를 저기 집어넣든 하십시오.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-size: 18pt;"><strong>3. &amp;&amp; 연산자로 if 역할 대신하기</strong></span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<div class="sp-wrap sp-wrap-default">
<div class="sp-head unfolded" title="Collapse">
(문법) 자바스크립트에선 &amp;&amp;연산자라는게 있습니다.
</div>
<div class="sp-body" style="display: block;">
<p></p>
<p>&nbsp;</p>
<p><strong>"그냥 왼쪽 오른쪽 둘다 true면 전체를 true로 바꿔주세요~"</strong> 라고 쓰고싶을 때 씁니다.</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-literal">false</span>;
<span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-literal">true</span>;</code></pre>
<p>맨 위의 코드는 그 자리에 false가 남고</p>
<p>밑의 코드는 true가 남습니다.</p>
<p>별거 아닙니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>근데 자바스크립트는&nbsp;&amp;&amp; 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-string">'안녕'</span>;
<span class="hljs-literal">false</span> &amp;&amp; <span class="hljs-string">'안녕'</span>;
<span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-literal">false</span> &amp;&amp; <span class="hljs-string">'안녕'</span>;</code></pre>
<p>맨 윗 코드는 '안녕'이 남고</p>
<p>중간 코드는 false가 남고</p>
<p>맨 아래 코드는 false가 남습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>왜냐면 &amp;&amp; 연산자를 잘 생각해보면 이해도 가능한데 이해를 하기 싫으면&nbsp;</p>
<p>"자바스크립트는 그냥 &amp;&amp;로 연결된 값들 중에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막값을 남겨준다"</p>
<p>이런 이상한 현상이 있다고 외우면 됩니다.&nbsp;</p>
<p>&nbsp;</p>
<p>이걸 리액트에서 약간 exploit 하면 if문을 조금 더 간략하게 쓸 수 있습니다.</p>
<p>&nbsp;</p>
<p>
</p><div class="spdiv">[collapse]</div>
</div>
</div>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>html 조건부로 보여줄 때 이런 경우가 많습니다.</p>
<p><strong>"만약에 이 변수가 참이면 &lt;p&gt;&lt;/p&gt;를 이 자리에 뱉고 참이 아니면 null 뱉고"</strong></p>
<p>UI만들 때 이런거 매우 자주 씁니다.&nbsp;</p>
<p>이걸 조금 더 쉽게 축약할 수 있습니다. &amp;&amp; 연산자를 쓰면 됩니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {
        1 === 1
        ? <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        : null
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
} 

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      { 1 === 1 &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>참이면 보여줄 HTML<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}</code></pre>
<p>그래서 위의 예제 두개는 동일한 역할을 합니다.</p>
<p>밑의 예제를 보시면 &amp;&amp; 연산자로 조건식과 오른쪽 JSX 자료를 비교하고 있습니다.</p>
<p>이 때, <strong>왼쪽 조건식이 true면 오른쪽 JSX가 그 자리에 남습니다.</strong></p>
<p><strong>왼쪽 조건식이 false면 false가 남습니다.</strong></p>
<p>(false가 남으면 HTML로 렌더링하지 않습니다)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>아무튼 "만약에 이 변수가 참이면 &lt;p&gt;&lt;/p&gt;를 이 자리에 뱉고 참이 아니면 null 뱉고"</p>
<p>이런 상황에서 자주 쓸 수 있는 간단한 조건문입니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-size: 18pt;"><strong>4. switch / case 조건문</strong></span></p>
<p>&nbsp;</p>
<p>이것도 기본 문법인데 if문이 중첩해서 여러개 달려있는 경우에 가끔 씁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component2</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">var</span> user = <span class="hljs-string">'seller'</span>;
  <span class="hljs-keyword">if</span> (user === <span class="hljs-string">'seller'</span>){
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>판매자 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (user === <span class="hljs-string">'customer'</span>){
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>구매자 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>그냥 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
  }
}</code></pre>
<p>▲ if문을 저렇게 연달아 여러개 써야되는 상황들이 있으면&nbsp;</p>
<p>자바스크립트 switch 문법을 이용하면 괄호를 조금 더 줄일 수 있습니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component2</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">var</span> user = <span class="hljs-string">'seller'</span>;
  <span class="hljs-keyword">switch</span> (user){
    <span class="hljs-keyword">case</span> <span class="hljs-string">'seller'</span> :
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>판매자 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
    <span class="hljs-keyword">case</span> <span class="hljs-string">'customer'</span> :
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>구매자 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
    <span class="hljs-keyword">default</span> : 
      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>그냥 로그인<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span></span>
  }
}</code></pre>
<p>▲ switch 문법 어떻게 쓰냐면&nbsp;</p>
<p>&nbsp;</p>
<p>1. <strong>switch (검사할변수){}</strong> 이거부터 작성하고</p>
<p>2. 그 안에 <strong>case 검사할변수가이거랑일치하냐 :</strong> 를 넣어줍니다.</p>
<p>3. 그래서 이게 일치하면 case : 밑에 있는 코드를 실행해줍니다.</p>
<p>4. <strong>default :</strong> 는 그냥 맨 마지막에 쓰는 else문과 동일합니다.</p>
<p>&nbsp;</p>
<p>장점은 if문 연달아쓸 때 코드가 약간 줄어들 수 있는데</p>
<p>조건식란에서 변수하나만 검사할 수 있다는게 단점입니다.&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-size: 18pt;"><strong>5. object/array 자료형 응용&nbsp;</strong></span></p>
<p>&nbsp;</p>
<p>"경우에 따라서 다른 html 태그들을 보여주고 싶은 경우"</p>
<p>if문 여러개 혹은 삼항연산자 여러개를 작성해야겠죠? 근데 이렇게 작성할 수도 있습니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="color: #000000;">예를 들면 쇼핑몰에서 상품설명부분을 탭으로 만든다고 합시다.</span></p>
<p>탭이 뭐냐면 그냥 경우에 따라서 상품정보 / 배송정보 / 환불약관 내용을 보여주고 싶은겁니다.</p>
<p>&nbsp;</p>
<p><strong>현재</strong> <strong>state가 info면 &lt;p&gt;상품정보&lt;/p&gt;</strong></p>
<p><strong>현재</strong> <strong>state가 shipping이면 &lt;p&gt;배송정보&lt;/p&gt;</strong></p>
<p><strong>현재 state가 refund면 &lt;p&gt;환불약관&lt;/p&gt;</strong></p>
<p>이런걸 보여주자는겁니다.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>일단 state를 만들어놓고 if문으로 state를 검사하는 문법을 써야할 것 같지만</p>
<p>이번엔 if문이 아니라 <span style="color: #000000;"><strong>자바스크립트 object 자료형</strong></span>에 내가 보여주고 싶은 HTML을 다 담습니다.</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">var</span> 현재상태 = <span class="hljs-string">'info'</span>;
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {
        { 
           info : <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>상품정보<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>,
           shipping : <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>배송관련<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>,
           refund : <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>환불약관<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        }[현재상태]
      }

    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
} </code></pre>
<p>▲ 원래 JSX 상에서 html 태그들은 저렇게 object에 담든, array에 담든 아무 상관없습니다.</p>
<p>암튼 이렇게 object 자료형으로 HTML을 다 정리해서 담은 다음</p>
<p>마지막에 object{} 뒤에 [] 대괄호를 붙여서 <strong>"key값이 <span style="color: #000000;">현재상태</span>인 자료를 뽑겠습니다"</strong> 라고 써놓는겁니다.</p>
<p>&nbsp;</p>
<p>그럼 이제 현재상태라는 변수의 값에 따라서 원하는 HTML을 보여줄 수 있습니다.</p>
<p>만약에 <strong>var 현재상태가 'info'면</strong> info 항목에 저장된 &lt;p&gt;태그가 보여질 것이고</p>
<p>만약에 <strong>var 현재상태가 'refund'면</strong> refund 항목에 저장된 &lt;p&gt;태그가 보여지겠죠?&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>아주 간단하고 직관적인 if문이 완성되었습니다.</p>
<p>이제 if/else 몰라도 조건부로 html 보여주기 가능&nbsp;</p>
<p>(예제에선 귀찮아서 state가 아니라 var 변수를 만들었습니다)</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>혹은 변수에 저장해서 써도 깔끔해질 것 같긴 합니다&nbsp;</p>
<p>&nbsp;</p>
<pre class="marker hljs"><code class="js hljs javascript"><span class="hljs-keyword">var</span> 탭UI = { 
  <span class="hljs-attr">info</span> : <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>상품정보<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>,
  shipping : <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>배송관련<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>,
  refund : <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>환불약관<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">var</span> 현재상태 = <span class="hljs-string">'info'</span>;
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      {
        탭UI[현재상태]
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
} </code></pre>
<p>▲ 뭔가 매우 깔끔해졌습니다.
</p>
<p>실은 안깔끔합니다</p>
<p>리액트처럼 html css js를 마구 한데 비벼서 개발하면 어떻게 해도 코드가 더러움&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>