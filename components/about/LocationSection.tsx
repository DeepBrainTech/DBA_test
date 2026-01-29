/**
 * 文件用途：关于我们页面的「我们的位置」区块，含嵌入式 Google 地图与地址/电话信息
 * 依赖关系：无外部业务依赖；地图使用 Google Maps 嵌入式 iframe
 * 注意事项：地址、电话与嵌入 URL 在 LOCATION 中维护
 */

'use client';

const LOCATION = {
  name: 'DeepBrain Academy',
  address: '120 County Rd, Suite 100-101 Tenafly, NJ 07670',
  phone: '914-488-4460',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6028.930857005808!2d-73.96620757921829!3d40.92746559425038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1bfbdb0ab33%3A0xf426db7344911778!2s120%20County%20Rd%2C%20Tenafly%2C%20NJ%2007670!5e0!3m2!1sen!2sus!4v1769717629979!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  googleMapsViewUrl: 'https://www.google.com/maps/search/?api=1&query=120+County+Rd+Tenafly+NJ+07670',
};

export default function LocationSection() {
  const handleCall = () => {
    window.location.href = `tel:${LOCATION.phone}`;
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#E8F4FC] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-11">
        {/* 顶部引导：地图图标 + Find Us；响应式尺寸与间距 */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            className="w-[160px] h-[50px] sm:w-[180px] sm:h-[58px] md:w-[209px] md:h-[66px] rounded-[20px] sm:rounded-[24px] md:rounded-[27.57px] bg-[#FFFFFF] flex items-center justify-center gap-1.5 sm:gap-2"
            style={{
              boxShadow:
                '0 1.38px 2.76px -1.38px rgba(0,0,0,0.1), 0 1.38px 4.14px 0 rgba(0,0,0,0.1)',
            }}
          >
            <span className="text-xl sm:text-2xl" aria-hidden>📍</span>
            <span className="text-[#6BB6FF] font-medium text-sm sm:text-base md:text-lg">Find Us</span>
          </div>
        </div>

        {/* 地址与联系方式：写在 Our Location 标题下方，响应式间距与字号 */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-[#2C3E50] mb-1.5 sm:mb-2">
            {LOCATION.name}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 leading-relaxed px-2 sm:px-0">
            {LOCATION.address}
          </p>
          <a
            href={LOCATION.googleMapsViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#274777] font-medium text-xs sm:text-sm md:text-base hover:underline inline-block mb-3 sm:mb-4"
          >
            View on Google Maps
          </a>
          <div>
            <button
              type="button"
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#274777] text-white py-2.5 px-4 sm:py-3 sm:px-5 rounded-lg font-medium hover:bg-[#1e3a5f] transition-colors text-sm sm:text-base"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {LOCATION.phone}
            </button>
          </div>
        </div>

        {/* 地图容器：居中、响应式高度；变小可改 max-w-*，去掉 max-w 则全宽 */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-200 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl min-h-[280px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-auto">
          <iframe
            title="DeepBrain Academy 位置 - Google Maps"
            src={LOCATION.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
