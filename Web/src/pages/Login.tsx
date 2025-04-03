import React, { useState } from 'react';
import { Form, Input, Button, message, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      setLoading(true);
      // 这里应该调用登录API
      console.log('登录信息:', values);
      
      // 模拟登录成功
      setTimeout(() => {
        message.success('登录成功');
        // 登录成功后跳转到首页
        navigate('/dashboard');
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('登录失败:', error);
      message.error('登录失败，请检查用户名和密码');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className="m-auto w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <img src={logo} alt="DeepRAG Logo" className="h-12 mx-auto mb-2" />
            <h1 className="text-2xl font-bold">欢迎使用 DeepRAG</h1>
          </div>
          
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size="large"
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input 
                prefix={<UserOutlined className="text-gray-400" />} 
                placeholder="用户名" 
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password 
                prefix={<LockOutlined className="text-gray-400" />} 
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full bg-primary hover:bg-indigo-600" 
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
            
            <div className="text-center text-sm text-gray-500">
              还没有账号？<a href="/register" className="text-primary hover:text-indigo-600">注册</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login; 