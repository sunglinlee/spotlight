import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const Warranty = () => {
  const [expandedSections, setExpandedSections] = useState({
    coating: false,
    film: false,
    care: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Helmet>
        <title>保固服務 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 提供完整的鍍膜和貼膜保固服務，包括保固範圍、注意事項和售後服務，讓您的愛車得到最佳保護。" />
        <meta name="keywords" content="汽車鍍膜保固, 貼膜保固, 鍍膜售後服務, 汽車美容保固" />
        <meta property="og:title" content="保固服務 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="SpotLight 提供完整的鍍膜和貼膜保固服務，讓您的愛車得到最佳保護。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/warranty" />
        <link rel="canonical" href="https://spotlight.com.tw/warranty" />
      </Helmet>

      <div className="warranty-page">
        <div 
          className="warranty-background"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/main_logo.png)`
          }}
        ></div>
        
        <div className="page-container">
          <div className="page-content">
            <h1>保固服務</h1>
            
            <div className="warranty-intro">
              <h2>愛車在外 SpotLight 在這做您最強大的「後盾」</h2>
              <p>施工車輛享受 SpotLight 的售後服務！</p>
              <p>保養建議於 SpotLight 門市購買貼膜車專用保養液，可確保您的鍍膜健康與漆面潑水。</p>
            </div>

            <div className="warranty-content">
              {/* 鍍膜保固 */}
              <div className="warranty-section">
                <div 
                  className="warranty-header"
                  onClick={() => toggleSection('coating')}
                >
                  <h3>鍍膜保固</h3>
                  <span className={`expand-icon ${expandedSections.coating ? 'expanded' : ''}`}>
                    {expandedSections.coating ? '−' : '+'}
                  </span>
                </div>
                
                {expandedSections.coating && (
                  <div className="warranty-details">
                    <div className="warranty-subsection">
                      <h4>鍍膜保固須知</h4>
                      <p>感謝您選擇 SpotLight 為愛車做漆面保護，現以鍍膜完畢並交車予您，請您仔細檢查車輛，確認完整交車流程。從施工之日起，施工車輛享受 SpotLight 的售後服務！日後自行清潔保養建議於 SpotLight 門市購買鍍膜車專用保養液，可確保您的鍍膜健康與漆面潑水。</p>
                    </div>

                    <div className="warranty-subsection">
                      <h4>鍍膜後注意事項</h4>
                      <ul>
                        <li>施工後7天內不能洗車，施工1周內盡量避開陰雨天，也不要高速行駛。</li>
                        <li>施工完後請一個月回來檢查鍍膜狀況，確保漆面有無殘留鍍膜痕或蠟痕。</li>
                        <li>請使用手工洗車，清洗車輛時禁止使用自動洗車機與機器打蠟，或是使用不對的臘品。</li>
                        <li>洗車後請把水珠擦乾避免水漬殘留。</li>
                        <li>盡量不要將您的愛車長時間停在樹下、空調外機下，餐廳排風扇下，以上情況均有可能會滴落強腐性污漬，如若附著污漬，需立即清洗車輛或到 SpotLight 處理。</li>
                        <li>如愛車經常在工業區使用：請在停車或不使用車輛時，用車體保護罩保護車身及膜面，避免空氣顆粒汚染及酸雨水漬腐蝕，以上情況將很難處理。</li>
                        <li>因雨水環境和灰塵顆粒污染，未定期護理會導致漆面保護膜亮度和性能下降，為了保持最佳的使用效果，建議每隔2~3個月前往 SpotLight 進行專業的深度清洗和塗層密封護理。</li>
                      </ul>
                    </div>

                    <div className="warranty-subsection">
                      <h4>保固範圍包括</h4>
                      <p>基本上車子在使用中一定會遇到特殊狀況，如果不小心遇到碰撞了，有時候遇到殘留在漆面上的傷痕，我們可以拋光盡量處理，如果嚴重到需要烤漆時，當交車完成的時候，漆面會有非常多的機械紋，這時候我幫你拋光漆面校正，再補上你原本的硬質結晶鍍膜，這個部分是不需要收費的「但是要酌收洗車費用」就是希望我們的客人可以高枕無憂的使用車子，SpotLight 做你最強力的保固。甚至是有些客人會加裝改裝配件也都可以針對新的部件再上鍍膜，一樣不會增收鍍膜費用喔。例如：加裝空力套件（下巴、尾翼，或換新的鋁圈）</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 貼膜保固 */}
              <div className="warranty-section">
                <div 
                  className="warranty-header"
                  onClick={() => toggleSection('film')}
                >
                  <h3>貼膜保固</h3>
                  <span className={`expand-icon ${expandedSections.film ? 'expanded' : ''}`}>
                    {expandedSections.film ? '−' : '+'}
                  </span>
                </div>
                
                {expandedSections.film && (
                  <div className="warranty-details">
                    <div className="warranty-subsection">
                      <h4>貼膜保固須知</h4>
                      <p>感謝您選擇 SpotLight 為愛車做漆面保護，現以裝貼完畢並交車予您，請您仔細檢查車輛，確認完整交車流程。從施工之日起，施工車輛享受 SpotLight 的售後和保護膜紙質雙重保障服務！日後自行清潔保養建議於 SpotLight 門市購買貼膜車專用保養液。</p>
                    </div>

                    <div className="warranty-subsection">
                      <h4>貼膜後注意事項</h4>
                      <ul>
                        <li>施工後7天內不能洗車，施工1周內盡量避開陰雨天，也不要高速行駛。</li>
                        <li>請使用手工洗車，清洗車輛時禁止使用自動洗車機與機器打蠟。</li>
                        <li>避免使用強鹼性清潔劑，以免損壞貼膜。</li>
                        <li>定期檢查貼膜狀況，如有異常請立即聯繫我們。</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* 保養建議 */}
              <div className="warranty-section">
                <div 
                  className="warranty-header"
                  onClick={() => toggleSection('care')}
                >
                  <h3>保養建議</h3>
                  <span className={`expand-icon ${expandedSections.care ? 'expanded' : ''}`}>
                    {expandedSections.care ? '−' : '+'}
                  </span>
                </div>
                
                {expandedSections.care && (
                  <div className="warranty-details">
                    <div className="warranty-subsection">
                      <h4>正確洗車流程</h4>
                      <ol>
                        <li><strong>預洗：</strong>使用高壓水槍沖洗車身，去除表面灰塵</li>
                        <li><strong>泡沫清潔：</strong>使用專業洗車精，避免使用洗碗精</li>
                        <li><strong>沖洗：</strong>由上而下沖洗，避免水漬殘留</li>
                        <li><strong>擦乾：</strong>使用吸水布擦乾，搭配風槍處理縫隙</li>
                        <li><strong>保養：</strong>使用鍍膜維護劑或棕櫚蠟保養</li>
                      </ol>
                    </div>

                    <div className="warranty-subsection">
                      <h4>工具清潔</h4>
                      <p>使用洗車精或除蠟劑清洗工具，特別是蠟棉與纖維布上面的殘蠟要清洗乾淨，但該汰換的還是要換，工具錢就別省了。</p>
                      <ul>
                        <li>洗完後自然陰乾避免陽光照射，以免纖維硬化。</li>
                        <li>不建議使用洗碗精清洗，大概洗個2~3次纖維也會慢慢硬化。</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="warranty-footer">
              <h3>在保固的問題上始終如一地陪伴你</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warranty; 