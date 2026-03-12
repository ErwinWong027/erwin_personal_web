#!/usr/bin/env python3
"""
PDF 转 JPG 脚本 - 使用 PyMuPDF (fitz)
不需要 Ghostscript 依赖
"""

import os
import fitz  # PyMuPDF

# 证书目录
cert_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', '奖状证书')

# 需要转换的 PDF 文件列表
pdf_files = [
    "三创校特等奖.pdf",
    "互联网 + 获奖证书.pdf",
    "品牌策划大赛新加坡中国一等奖.pdf",
    "商业精英挑战赛新加坡总决赛全国一等奖.pdf",
    "关于 2021 年大学生创新创业训练计划项目推荐国家级的公示.pdf",
    "结题证书（修改后）.pdf",
    "校先进个人和志愿者.pdf",
    "河南大创.pdf",
]

print("🎨 开始转换 PDF 证书为 JPG 图片...")
print()

success_count = 0
fail_count = 0

for pdf_name in pdf_files:
    pdf_path = os.path.join(cert_dir, pdf_name)
    
    if not os.path.exists(pdf_path):
        print(f"⚠️  文件不存在：{pdf_path}")
        continue
    
    # 移除 .pdf 扩展名
    base_name = pdf_name.rsplit('.', 1)[0]
    output_path = os.path.join(cert_dir, f"{base_name}.jpg")
    
    print(f"📄 转换：{pdf_name} -> {base_name}.jpg")
    
    try:
        # 打开 PDF
        doc = fitz.open(pdf_path)
        
        # 只转换第一页
        page = doc[0]
        
        # 设置缩放比例（2x 分辨率）
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)
        
        # 渲染页面为图片
        pix = page.get_pixmap(matrix=mat)
        
        # 保存为 JPG
        pix.save(output_path, output="jpg", jpg_quality=90)
        
        doc.close()
        
        print(f"✅ 成功：{base_name}.jpg")
        success_count += 1
        
    except Exception as e:
        print(f"❌ 失败：{pdf_name} - {str(e)}")
        fail_count += 1
    
    print()

print("=" * 40)
print("转换完成！")
print(f"成功：{success_count} 个")
print(f"失败：{fail_count} 个")
print("=" * 40)
