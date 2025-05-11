// Script để kiểm tra quy trình build trước khi deploy
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Tạo thư mục scripts nếu chưa tồn tại
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// Kiểm tra xem thư mục build có tồn tại không
console.log(chalk.blue('Kiểm tra quy trình build...'));

// Kiểm tra các file quan trọng
const requiredFiles = [
  { path: 'next.config.js', name: 'Cấu hình Next.js' },
  { path: '.github/workflows/deploy.yml', name: 'GitHub Actions workflow' },
  { path: 'public/.nojekyll', name: 'File .nojekyll' },
];

let allFilesExist = true;

for (const file of requiredFiles) {
  if (!fs.existsSync(file.path)) {
    console.log(chalk.red(`❌ Thiếu file: ${file.path} (${file.name})`));
    allFilesExist = false;
  } else {
    console.log(chalk.green(`✓ Đã tìm thấy: ${file.path} (${file.name})`));
  }
}

// Kiểm tra cấu hình basePath trong next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
try {
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
  if (!nextConfigContent.includes('basePath')) {
    console.log(chalk.yellow('⚠️ Không tìm thấy cấu hình basePath trong next.config.js'));
    allFilesExist = false;
  } else {
    console.log(chalk.green('✓ Đã cấu hình basePath trong next.config.js'));
  }
} catch (err) {
  console.log(chalk.red('❌ Không thể đọc file next.config.js'));
}

// Kiểm tra GitHub Actions workflow
const workflowPath = path.join(process.cwd(), '.github/workflows/deploy.yml');
try {
  const workflowContent = fs.readFileSync(workflowPath, 'utf8');
  // Kiểm tra phiên bản upload-pages-artifact
  if (workflowContent.includes('actions/upload-pages-artifact@v2')) {
    console.log(chalk.yellow('⚠️ Phát hiện phiên bản cũ của upload-pages-artifact (v2) trong workflow. Nên cập nhật lên v3.'));
  } else if (workflowContent.includes('actions/upload-pages-artifact@v3')) {
    console.log(chalk.green('✓ Sử dụng phiên bản mới của upload-pages-artifact (v3) trong workflow.'));
  } else {
    console.log(chalk.yellow('⚠️ Không tìm thấy cấu hình upload-pages-artifact trong workflow.'));
  }
  
  // Kiểm tra phiên bản deploy-pages
  if (workflowContent.includes('actions/deploy-pages@v2')) {
    console.log(chalk.yellow('⚠️ Phát hiện phiên bản cũ của deploy-pages (v2) trong workflow. Nên cập nhật lên v4.'));
  } else if (workflowContent.includes('actions/deploy-pages@v4')) {
    console.log(chalk.green('✓ Sử dụng phiên bản mới của deploy-pages (v4) trong workflow.'));
  } else {
    console.log(chalk.yellow('⚠️ Không tìm thấy cấu hình deploy-pages trong workflow.'));
  }
} catch (err) {
  console.log(chalk.red('❌ Không thể đọc file GitHub Actions workflow.'));
}

// Kiểm tra thư mục public
if (fs.existsSync('public')) {
  console.log(chalk.green('✓ Thư mục public tồn tại'));
  
  // Kiểm tra CV và ảnh
  if (fs.existsSync('public/[Data_Engineer] - Tran_Minh_Duc.pdf')) {
    console.log(chalk.green('✓ File CV tồn tại'));
  } else {
    console.log(chalk.yellow('⚠️ Không tìm thấy file CV trong thư mục public'));
  }
  
  if (fs.existsSync('public/images/chandung.png')) {
    console.log(chalk.green('✓ Ảnh đại diện tồn tại'));
  } else {
    console.log(chalk.yellow('⚠️ Không tìm thấy ảnh đại diện (chandung.png) trong thư mục public/images'));
  }
} else {
  console.log(chalk.red('❌ Thư mục public không tồn tại'));
  allFilesExist = false;
}

if (allFilesExist) {
  console.log(chalk.green('\n✅ Tất cả các file cần thiết đều tồn tại. Bạn có thể build và deploy.'));
  console.log(chalk.blue('\nĐể build và deploy, chạy:'));
  console.log(chalk.white('npm run build'));
  console.log(chalk.white('npm run deploy'));
} else {
  console.log(chalk.yellow('\n⚠️ Có một số vấn đề cần khắc phục trước khi deploy.'));
} 