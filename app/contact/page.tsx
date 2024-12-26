'use client'
import React from 'react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   contact: '',
  //   company: '',
  //   message: ''
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 1000));
    
  //   setSubmitStatus('success');
  //   setIsSubmitting(false);
  //   setFormData({
  //     name: '',
  //     contact: '',
  //     company: '',
  //     message: ''
  //   });
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-80">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-lg text-center max-w-2xl">
            期待与您携手共创智能未来，欢迎通过以下方式与我们取得联系
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">联系方式</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">电话</h3>
                  <p className="text-gray-600">15901117209</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">邮箱</h3>
                  <p className="text-gray-600">service@coijing.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">地址</h3>
                  <p className="text-gray-600">河南省郑州市中原区梧桐街河南省国家大学科技园西区孵化1号楼3A07</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-200 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/map.png"
                alt="地图"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">在线咨询</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  称呼 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 px-4 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系方式 *
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 px-4 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  公司名称
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-10 px-4 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  咨询内容 *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>提交中...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    <span>提交咨询</span>
                  </>
                )}
              </button>
            </form>

            {submitStatus === 'success' && (
              <Alert className="mt-6 bg-green-50 text-green-800 border-green-200">
                <AlertDescription>
                  提交成功！我们会尽快与您联系。
                </AlertDescription>
              </Alert>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;