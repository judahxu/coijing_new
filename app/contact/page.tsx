'use client'
import React from 'react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('contact');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-80">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-center max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-20 pb-24">
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">{t('contactInfo.title')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t('contactInfo.phone.label')}</h3>
                  <p className="text-gray-600">{t('contactInfo.phone.value')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t('contactInfo.email.label')}</h3>
                  <p className="text-gray-600">{t('contactInfo.email.value')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t('contactInfo.address.label')}</h3>
                  <p className="text-gray-600">{t('contactInfo.address.value')}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-200 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/map.png"
                alt={t('contactInfo.address.label')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;