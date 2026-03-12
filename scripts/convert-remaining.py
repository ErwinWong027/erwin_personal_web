#!/usr/bin/env python3
import fitz
import os

cert_dir = '/Users/erwinwong/Documents/个人品牌/public/奖状证书'

pdf_files = [
    '互联网 + 获奖证书.pdf',
    '关于 2021 年大学生创新创业训练计划项目推荐国家级的公示.pdf'
]

for pdf_name in pdf_files:
    pdf_path = os.path.join(cert_dir, pdf_name)
    if os.path.exists(pdf_path):
        print(f'转换：{pdf_name}')
        doc = fitz.open(pdf_path)
        page = doc[0]
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        base_name = pdf_name.rsplit('.', 1)[0]
        output_path = os.path.join(cert_dir, f'{base_name}.jpg')
        pix.save(output_path, output='jpg', jpg_quality=90)
        doc.close()
        print(f'✅ 成功：{base_name}.jpg')
    else:
        print(f'⚠️ 文件不存在：{pdf_path}')
