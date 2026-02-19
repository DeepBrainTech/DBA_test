/**
 * 文件用途：Summer Camp Track A 区块容器组件（STEM Innovation）
 * 依赖关系：依赖 next/image、TrackAFeatureCard、data/summer_camp
 * 注意事项：包含 Program 标题、四宫格特色、引用、Featured Projects 列表与注册按钮
 */

import Image from 'next/image';
import { summerCampPageData } from '@/data/summer_camp';
import TrackAFeatureCard from '@/components/summer_camp/TrackAFeatureCard';

export default function TrackA() {
  const { trackA } = summerCampPageData;
  const features = trackA.features;
  return (
    <div className="px-14 pt-20 bg-[#FBF9F4]">
      <div className="w-full max-w-[1344px] mx-auto px-9 pt-0 flex flex-col justify-start items-center gap-16">
        {/* 标题区：Program 标签 + Track A 标题 + 副标题（整体居中） */}
        {/* 字号与 LearningStrategies 区块标题一致：badge text-lg/xl、主标题 3xl/4xl、副标题 base/lg */}
        <div className="w-full flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-rose-400/10 px-5 py-3.5">
            <span className="text-xl md:text-2xl leading-8 font-['Outfit']" aria-hidden>📖️</span>
            <span className="text-rose-400 text-lg md:text-xl font-normal font-['Outfit'] leading-7">Program</span>
          </div>
          <h2 className="text-slate-700 text-3xl md:text-4xl font-bold font-['Outfit'] leading-tight">Track A: STEM Innovation</h2>
          <p className="max-w-[560px] text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-relaxed">A 2 to 6-week, project-based STEAM exploration for the innovators of tomorrow.</p>
        </div>

        {/* 四宫格：左右与上下间距一致（gap-6），md+ 双列每列最大 540px */}
        <div className="w-full max-w-[1104px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:[grid-template-columns:repeat(2,minmax(0,540px))] md:justify-center">
          <TrackAFeatureCard index={1} {...features[0]} />
          <TrackAFeatureCard index={2} {...features[1]} />
          <TrackAFeatureCard index={3} {...features[2]} />
          <TrackAFeatureCard index={4} {...features[3]} />
        </div>

        {/* 引用块：带引号装饰与渐变背景；流式布局避免正文与署名重叠 */}
        <div className="w-[1268px] max-w-full relative bg-gradient-to-r from-green-400/0 to-green-400/0 rounded-3xl overflow-hidden pl-16 pr-8 py-9 md:pl-[114px]">
          <div className="w-7 h-16 left-[27.88px] top-[27.88px] absolute opacity-20 pointer-events-none">
            <span className="text-green-400 text-7xl font-normal font-['Outfit'] leading-[69.70px]">&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="w-full max-w-[1028px] text-center text-slate-700 text-xl font-normal font-['Outfit'] leading-7">
              This track is designed for students who are passionate about science, technology, engineering, and math. Through a series of hands-on projects, students will dive deep into advanced scientific concepts and apply them to solve real-world problems. They will learn to identify challenges, design and build prototypes, test their creations, and communicate their findings. Each project is an immersive experience that combines theory with practice, guided by our expert instructors.
            </p>
            <p className="text-slate-500 text-lg font-normal font-['Outfit'] leading-7">DeepBrain Academy Coaching Team</p>
          </div>
        </div>

        {/* Featured Projects 列表 */}
        <div className="w-[1270px] max-w-full h-[1551px] relative bg-white rounded-3xl">
          <div className="w-[1195px] h-[1477px] left-[36.83px] top-[36.77px] absolute" />
          <div className="w-[1195px] max-w-full h-24 left-[36.83px] top-[67.77px] absolute">
            <div className="w-24 h-24 left-0 top-0 absolute bg-rose-400/10 rounded-3xl">
              <div className="w-10 h-10 left-[25.66px] top-[25.21px] absolute">
                <div className="w-8 h-8 left-[4.20px] top-[5.25px] absolute outline outline-4 outline-offset-[-2px] outline-rose-400" />
              </div>
            </div>
            <div className="w-64 h-10 left-[130px] top-0 absolute">
              <div className="left-0 top-[-0.23px] absolute justify-start text-slate-700 text-xl md:text-2xl font-semibold font-['Outfit'] leading-tight">Featured Projects</div>
            </div>
            <div className="w-64 h-7 left-[130px] top-[48.32px] absolute">
              <div className="w-[700px] max-w-full h-7 left-0 top-[-1.32px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Key Subjects: Physics, Robotics, Bionics, Mathematics, Music, and more.<br /></div>
            </div>
          </div>
          <div className="w-[1196px] max-w-full left-[36.83px] top-[195.77px] absolute inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="Spiral Wonders" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-56 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 1   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">Spiral Wonders</span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Explore bio-inspired structures like DNA and plant tendrils.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Study mechanical anisotropy and geometric nonlinearity.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Build self-forming spiral prototypes from flat bands.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="Art and Science of Origami" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-96 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 2   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">Art &amp; Science of Origami </span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Math meets Engineering: From solar panels to soft robotics.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Computational origami and unfolding algorithms.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Design magnetically driven origami grippers.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="Bionic Acoustic Engineering" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-96 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 3   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">Bionic Acoustic Engineering</span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Build instruments and analyze sound waveforms.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Design artificial vocal cords and mimic animal sounds.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Innovate wearable devices using 3D modeling.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="The Science of Magic" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-96 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 4   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">The Science of Magic</span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Reverse-engineer &quot;magic&quot; using physics, materials, and perception.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Explore anti-gravity, invisibility, and non-Newtonian fluids.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Design and perform a science-based magic show.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="Robotics and Biomimetics" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-96 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 5   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">Robotics &amp; Biomimetics</span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Analyze insect locomotion patterns and soft-body motion.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Design biomimetic mechanical structures and flexible grippers.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Build SMA-driven (Shape Memory Alloy) robots and artificial muscles.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-52 pr-5 bg-rose-400/5 rounded-[20px] inline-flex justify-start items-start gap-14">
              <Image className="w-52 h-52 rounded-tl-[20px] rounded-bl-[20px] object-cover" src="https://placehold.co/210x203" width={208} height={208} alt="Bionic Organs Exploration" unoptimized />
              <div className="w-[866px] max-w-full h-52 py-6 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-7 relative">
                  <div className="w-44 h-14 left-[-2px] top-0 absolute">
                    <div className="w-96 h-7 left-0 top-[-1px] absolute justify-start"><span className="text-rose-400 text-base font-normal font-['Outfit'] leading-7">Project 6   </span><span className="text-slate-700 text-lg md:text-xl font-semibold font-['Outfit'] leading-7">Bionic Organs Exploration</span></div>
                  </div>
                </div>
                <div className="w-[547px] max-w-full h-28 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Study human anatomy and organ function (heart, lungs, brain).</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Use micro-controller, muscle sensor, and servo motor to build prototypes.</div>
                  </div>
                  <div className="self-stretch h-7 relative">
                    <div className="w-3 h-5 left-0 top-[6px] absolute inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-rose-400 text-base font-normal font-['Outfit'] leading-5">▸</div>
                    </div>
                    <div className="w-[653px] max-w-full left-[21px] top-[0.40px] absolute justify-start text-slate-500 text-base md:text-lg font-normal font-['Outfit'] leading-7">Build physical bionic organ models to explore medical device principles.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-56 h-14 left-[52.83px] top-[-26.23px] absolute bg-rose-400 rounded-[33.19px] shadow-[0px_6.637856483459473px_9.956785202026367px_-6.637856483459473px_rgba(0,0,0,0.10)] shadow-[0px_16.594640731811523px_24.8919620513916px_-4.978392601013184px_rgba(0,0,0,0.10)]">
            <div className="left-[40px] top-[8px] absolute text-center justify-start text-white text-base md:text-lg font-normal font-['Outfit'] leading-8">Course Overview</div>
          </div>
        </div>

        {/* 注册按钮 */}
        <div className="w-[1269.80px] max-w-full h-14 pl-20 pr-48 rounded-3xl flex flex-col justify-start items-start">
          <div className="w-[1110.20px] max-w-full h-14 flex flex-col justify-start items-start gap-7">
            <div className="self-stretch h-14 relative">
              <div className="w-72 h-14 px-7 pt-3 left-[415.73px] top-[0.57px] absolute bg-rose-400 rounded-3xl shadow-[0px_4.6464996337890625px_6.969749450683594px_-4.6464996337890625px_rgba(0,0,0,0.10)] shadow-[0px_11.61624813079834px_17.424373626708984px_-3.484874725341797px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-center">
                <div className="w-44 h-9 inline-flex justify-start items-center">
                  <div className="w-44 text-center justify-start text-white text-base md:text-lg font-bold font-['Outfit'] leading-7">Register Now</div>
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-3.5 h-0 left-[4.84px] top-[11.62px] absolute outline outline-2 outline-offset-[-0.97px] outline-white" />
                    <div className="w-1.5 h-3.5 left-[11.62px] top-[4.84px] absolute outline outline-2 outline-offset-[-0.97px] outline-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
