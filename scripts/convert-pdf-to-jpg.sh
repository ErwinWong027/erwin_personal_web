#!/bin/bash

# PDF 转 JPG 脚本
# 使用 macOS 自带的 sips 和 qlmanage 工具

CERT_DIR="./public/奖状证书"

echo "开始转换 PDF 证书为图片..."

# 列出所有需要转换的 PDF 文件
PDF_FILES=(
  "三创校特等奖.pdf"
  "互联网 + 获奖证书.pdf"
  "品牌策划大赛新加坡中国一等奖.pdf"
  "商业精英挑战赛新加坡总决赛全国一等奖.pdf"
  "关于 2021 年大学生创新创业训练计划项目推荐国家级的公示.pdf"
  "结题证书（修改后）.pdf"
  "校先进个人和志愿者.pdf"
  "河南大创.pdf"
)

for pdf in "${PDF_FILES[@]}"; do
  pdf_path="$CERT_DIR/$pdf"
  if [ -f "$pdf_path" ]; then
    # 移除 .pdf 扩展名
    base_name="${pdf%.pdf}"
    output_path="$CERT_DIR/${base_name}.jpg"
    
    echo "转换：$pdf -> ${base_name}.jpg"
    
    # 使用 sips 尝试转换（可能需要先通过预览生成缩略图）
    # 注意：sips 对多页 PDF 支持有限，这里只转换第一页
    
    # 方法 1: 使用 qlmanage 生成预览
    qlmanage -t -s 1200 -o "$CERT_DIR" "$pdf_path" 2>/dev/null
    # qlmanage 会生成 .png 文件
    if [ -f "$CERT_DIR/${base_name}.png" ]; then
      mv "$CERT_DIR/${base_name}.png" "$output_path"
      echo "✓ 成功：${base_name}.jpg"
    else
      echo "✗ 失败：$pdf"
    fi
  else
    echo "⚠ 文件不存在：$pdf_path"
  fi
done

echo "转换完成！"
