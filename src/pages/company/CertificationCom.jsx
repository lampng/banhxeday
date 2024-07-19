import ImgWithCaption from '../../components/Layout/Content/ImgWithCaption';
import React from 'react';
function CertificationCom() {
    return (
        <div className="grid grid-cols-3 gap-20 ">
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_01.jpg'} caption={'CE마크'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_02.jpg'} caption={'ISO 9001 영문'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_03.jpg'} caption={'ISO 9001'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_04.jpg'} caption={'ISO 14001 영문'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_05.jpg'} caption={'ISO 14001'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_06.jpg'} caption={'디자인등록증1'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_07.jpg'} caption={'디자인등록증2'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_08.jpg'} caption={'디자인등록증3'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_09.jpg'} caption={'벤처기업확인서'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_10.jpg'} caption={'연구전담부서'} />
            <ImgWithCaption image={'/src/assets/content/certification/certifi_s_11.jpg'} caption={'특허증'} />
        </div>
    );
}
export default CertificationCom;
